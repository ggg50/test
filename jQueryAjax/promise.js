
// 构建 window.jQuery;

window.jQuery = function (nodeOrSelector) {
    let nodes;
/*
....
*/
    return nodes;
};


// jQuery.ajax promise 版本从这里开始；

    window.jQuery.ajax = function ({url, method, body}) {
      return new Promise((resolve, reject) => {

        let request = new XMLHttpRequest;
        request.open(method, url);
        request.send(body);

        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status <= 300) {
                resolve.call(undefined, request.responseText);
            } else if (request.status >= 400) {
                reject(undefined, request);
            };
          };
        };
      });
    };


let $ = window.jQuery;

// running

let promise = $.ajax({
  url: "/xxx",
  method: "POST",
  body: "哈哈"
});

promise.then(
  text=> {
    //success function;
  },
  request => {
    //fail function;
  }
);
