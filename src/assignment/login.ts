import { $ } from '../ultil';
import swal from 'sweetalert';
export default class login {
    async render() {
        $('.point').style.visibility = "hidden";
        return `
                <div class="container-fluid" style="height: 700px;">
                    <div class="container" style="height: 250px;"></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-2"></div>
                            <div class="col-xl-8">
                                <form id="form-submit">
                                    <label for="">Nhập tên:</label>
                                    <span><input type="text" id="userName"></span>
                                    <button type="submit" class="btn btn-success">Bắt đầu</button> 
                                </form>                  
                            </div>
                            <div class="col-xl-2"></div>
                    </div>
                    </div>
                </div>
        `
    };
    async afterRender() {
        $('#form-submit').addEventListener('submit', e => {
            e.preventDefault();
            if ($('#userName').value == "") {
                swal({
                    text: "Bạn chưa nhập tên!",
                  });
            } else {
                const userName = $('#userName').value;
                localStorage.setItem('user', userName);
                window.location.hash = '/games';
            }
        })
    }
}