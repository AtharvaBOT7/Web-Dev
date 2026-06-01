document.addEventListener("DOMContentLoaded", function() {

    const searchButton = document.getElementById("search_button");
    const usernameInput = document.getElementById("user_input");
    const statsContainer = document.querySelector(".stats_container");
    const easyProgressCircle = document.querySelector(".easy_progress");
    const mediumProgressCircle = document.querySelector(".medium_progress");
    const hardProgressCircle = document.querySelector(".hard_progress");
    const easyLabel = document.getElementById("easy_label");
    const mediumLabel = document.getElementById("medium_label");
    const hardLabel = document.getElementById("hard_label");
    const cardStatsContainer = document.querySelector(".stats_card");

    function validateUsername(username) {
        if(username.trim() === ""){
            alert("Please enter a username");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching = regex.test(username);

        if(!isMatching){
            alert("Invalid Username");
        }
        return isMatching;
    }

    async function fetchUserDetails(username){

        try{
            searchButton.textContent = "Searching..."
            searchButton.disabled = true;

            const targetUrl = `https://leetcode.com/graphql/`;
            const proxyUrl = `https://cors-anywhere.herokuapp.com/`     // We need to create a proxy URL because LeetCode will reject our request but if we send it from this proxy server URL then Leetcode will think that the server has requested data and will not reject our request.

            const myHeaders = new Headers();
            myHeaders.append("content-type", "application/json");

            const graphql = JSON.stringify({
                    query: "\n    query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n  }\n}\n    ",
                    variables: { "username": `${username}` }
                })
            
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: graphql,
                redirect: "follow"
            }     // We are using POST method because we are using GraphQL and while using GraphQL, we are requesting a query, the query will fetch all the details and that is the body of the request, GET request does not have a body and therefore we need to use POST with GraphQL.

            const response = await fetch(proxyUrl+targetUrl, requestOptions);

            if (!response.ok){
                throw new Error("Unable to fetch User Details");
            }

            const parsedData = await response.json();
            console.log("Logging Data: ", parsedData);

            displayUserData(parsedData);
        }
        catch(error){
            statsContainer.innerHTML = `<p> No Data Found</p>`
        }
        finally{
            searchButton.textContent = "Search"
            searchButton.disabled = false;
        }
    }

    function updateProgress(solved, total, label, circle){
        const progressDegree = (solved / total) * 100;
        
        circle.style.setProperty("--progress-degree", `${progressDegree}%`);

        label.textContent = `${solved} / ${total}`;
    }

    function displayUserData(parsedData){
        const totalQues = parsedData.data.allQuestionsCount[0].count;
        const totalEasyQues = parsedData.data.allQuestionsCount[1].count;
        const totalMediumQues = parsedData.data.allQuestionsCount[2].count;
        const totalHardQues = parsedData.data.allQuestionsCount[3].count;

        const solvedTotalQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[0].count;
        const solvedTotalEasyQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[1].count;
        const solvedTotalMediumQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[2].count;
        const solvedTotalHardQues = parsedData.data.matchedUser.submitStats.acSubmissionNum[3].count;

        updateProgress(solvedTotalEasyQues, totalEasyQues, easyLabel, easyProgressCircle);
        updateProgress(solvedTotalMediumQues, totalMediumQues, mediumLabel, mediumProgressCircle);
        updateProgress(solvedTotalHardQues, totalHardQues, hardLabel, hardProgressCircle);

        const cardsData = [
            {
                label: "Overall Submissions", value: parsedData.data.matchedUser.submitStats.totalSubmissionNum[0].submissions
            },
            {
                label: "Overall Easy Submissions", value: parsedData.data.matchedUser.submitStats.totalSubmissionNum[1].submissions
            },
            {
                label: "Overall Medium Submissions", value: parsedData.data.matchedUser.submitStats.totalSubmissionNum[2].submissions
            },
            {
                label: "Overall Hard Submissions", value: parsedData.data.matchedUser.submitStats.totalSubmissionNum[3].submissions
            }
        ];
        console.log("Card Data: ", cardsData);

        cardStatsContainer.innerHTML = cardsData.map(
            data => `
                    <div class="card">
                    <h4>${data.label}</h4>
                    <p>${data.value}</p>  
                    </div>
                `
        ).join("");

    }

    searchButton.addEventListener('click', function() {
        const username = usernameInput.value;
        console.log("Logging Username: ", username);

        if (validateUsername(username)) {
            fetchUserDetails(username);
        }
    })

})