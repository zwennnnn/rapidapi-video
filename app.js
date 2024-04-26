async function videoApi() {
  const domainGirisi = document.getElementById('domainInput').value;
  const url =
    'https://domain-da-pa-check.p.rapidapi.com/?target=' +
    encodeURIComponent(domainGirisi);
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'PUT_YOUR_RAPİD_APİ_KEY',
      'X-RapidAPI-Host': 'domain-da-pa-check.p.rapidapi.com',
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  const donenRes = document.getElementById('donenRes');
  const totalResult = document.getElementById('totalResults');
  const target = document.getElementById('targetDomain');
  const domainScore = document.getElementById('domainAuth');
  const pageScore = document.getElementById('pageAuth');
  const spamScore = document.getElementById('spamScore');
  const backLinks = document.getElementById('backLinks');
  const butunResult = JSON.stringify(data, null, 2);

  try {
    response;
    data;
    totalResult.textContent = butunResult;
    target.textContent = data.body.target;
    domainScore.textContent = data.body.da_score;
    pageScore.textContent = data.body.pa_score;
    spamScore.textContent = data.body.spam_score;
    backLinks.textContent = data.body.total_backlinks;
    donenRes.textContent = data.result;
  } catch (error) {
    console.error(error);
  }
}

document.getElementById('submitButton').addEventListener('click',videoApi);
