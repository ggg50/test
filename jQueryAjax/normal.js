
// 构建 window.jQuery, jQuery.ajax 在后面；

window.jQuery = function (nodeOrSelector) {
    let nodes;

    let temp = document.querySelectorAll(nodeOrSelector);
    if(typeof nodeOrSelector === "string") {
      for (let i = 0; i< temp.length; i++) {
          nodes[i] = temp[i];
      } else {
          nodes[0] = nodeOrSelector;
          nodes.length = 1;
        };
      };

    return nodes;
};


// jQuery.ajax 从这里开始；

    window.jQuery.ajax = function ({url, method, body, success, fail}) {
        let request = new XMLHttpRequest;
        request.open(method, url);
        request.send(body);

        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status <= 300) {
                success.call(undefined, request.responseText);
            } else if (request.status >= 400) {
                fail.call(undefined, request);
            };
          };
        };
    };


window.$ = window.jQuery;

//$.ajax(...)
