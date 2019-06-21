import riot from 'riot';
import "./tags/homepage.tag";
import "./tags/signin.tag";
import route from "riot-route";

route.base("/");
route("/home",() => {
    console.log("day la trang chu");
    const homepage = riot.mount('div#root', 'homepage');
})

route("/signin",() => {
    console.log("day la trang dang nhap");
    const signIn = riot.mount('div#root', 'signin');
})
const signIn = riot.mount('div#root', 'signin');
 
route.start(true)