/**
 * Created by v_zhangbing on 2017/7/31.
 */

function greeter(person: string) {
    return "Hello " + person;
}

var user: string = "Tom";
document.body.innerHTML = greeter(user);