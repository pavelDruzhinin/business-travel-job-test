let resultTasks2 = tasks.reduce((result, next) => {
    let task = result.filter(x => x.trelloLink == next.trelloLink)[0];

    const time = next.time.split(':').reverse().reduce((sum, value, index) => { return +sum + (+value) * Math.pow(60, index) });
    // const time = +next.time.split(':')[0];
    // console.log(next.trelloLink, next.time, time);
    if (!task) {
        result.push({ trelloLink: next.trelloLink, time: time });
    } else {
        task.time += time;
    }

    return result;
}, []);
resultTasks2.forEach((el) => console.log(el.trelloLink, el.time = Math.ceil(el.time / 3600 * 100) / 100));
console.log(Math.ceil(resultTasks2.reduce((total, next) => total + next.time, 0) * 100) / 100);
