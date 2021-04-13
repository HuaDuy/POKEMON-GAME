import { $ } from '../ultil'
const Navbar = {
    async render() {
        const userName = localStorage.getItem('user');
        return /*html*/`
                    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="margin-top: 30px; background-color: gray">
                        <div class="container-fluid">
                          <a class="navbar-brand" href="#">Xin chào: ${userName}</a>
                          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                          </button>
                          <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                              <li class="nav-item">
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Hướng Dẫn
                                    </button>
                              </li>
                              <li class="nav-item" style="margin-left: 10px">
                                    <button class="btn btn-success restart">Chơi Lại</button>
                              </li>
                              <li class="nav-item" style="margin-left: 10px">
                                    <button class="btn btn-danger logout">Đăng Xuất</button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </nav>
                      
        `
    }
}
export default Navbar;