const linkedinUrl="https://www.linkedin.com/jobs/?sub=react&duration=3months";
const urlObject=new URL(linkedinUrl);
console.log(urlObject);
console.log(urlObject.host);
console.log(urlObject.search);
console.log(urlObject.searchParams);

const params=new URLSearchParams(urlObject.search);
console.log(params);
params.set("time","8am");
console.log(params);