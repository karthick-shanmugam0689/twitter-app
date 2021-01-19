const tweets = [];
for (let i = 0; i < 1000; i++) {
  const currentDate = new Date();
  currentDate.setSeconds(currentDate.getSeconds() - i);
  tweets.push({
    account: `sampler${i}`,
    timestamp: currentDate,
    content: `Hi Im from sampler${i}`,
    id: `id${i}`,
  });
}

export default tweets;
