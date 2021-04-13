import { $ } from '../ultil'
export default class error404 {
    render(){
        $('.point').style.visibility = "hidden";
        return `<img src="img/404page.jpg" height="700px">`
    }
}