var xhttp = new XMLHttpRequest();
xhttp.open("GET", "https://www.blackrock.com/tools/hackathon/portfolio-analysis?betaPortfolios=SNP500&calculateExposures=true&calculatePerformance=true&positions=AAPL~20%7CMSFT~20%7CINTC~20%7CQCOM~20%7CGOOG~20&riskFreeRatePortfolio=LTBILL1-3M", true);
xhttp.send()
