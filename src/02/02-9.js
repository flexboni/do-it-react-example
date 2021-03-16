// 기존
function work1(onDone) {
  setTimeout(() => onDone('작업1 완료!'), 100);
}
function work2(onDone) {
  setTimeout(() => onDone('작업2 완료!'), 200);
}
function work3(onDone) {
  setTimeout(() => onDone('작업3 완료!'), 300);
}
function urgentWork() {
  console.log('긴급 작업');
}

work1(function(msg1) {
  console.log('donw after 100ms: ' + msg1);

  work2(function(msg2) {
    console.log('donw after 300ms: ' + msg2);
  });

  work3(function(msg3) {
    console.log('donw after 600ms: ' + msg3);
  });
});
urgentWork();

// -----------------------------------------------

class Promise {
  constructor(fn) {
    const resolve = (...args) => {
      if (typeof this.onDone === 'function') {
        this.onDone(...args);
      }
      if (typeof this.onComplete === 'function') {
        this.onComplete();
      }
    };

    const reject = (...args) => {
      if (typeof this.onError === 'function') {
        this.onError(...args);
      }
      if (typeof this.onComplete === 'function') {
        this.onComplete();
      }
    };

    fn(resolve, reject);
  }

  then(onDone, onError) {
    this.onDone = onDone;
    this.onError = onError;
    return this;
  }
  catch(onError) {
    this.onError = onError;
    return this;
  }
  finally(onComplete) {
    this.onComplete = onComplete;
    return this;
  }
}

const work1 = () =>
  new Promise(reslove => {
    setTimeout(() => reslove('작업1 완료!'), 100);
  });

const work2 = () =>
  new Promise(reslove => {
    setTimeout(() => reslove('작업2 완료!'), 200);
  });

const work3 = () =>
  new Promise(reslove => {
    setTimeout(() => reslove('작업3 완료!'), 300);
  });
