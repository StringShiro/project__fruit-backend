import React from "react";
import "./ProfilePage.scss";
import Logosearch from "../logo/Logo_search";
import { Image, Row, Col, Container } from "react-bootstrap";
import Homefooter from "../../Footer/Home_footer";
export default function ProfilePage() {
  return (
    <>
      <Logosearch />
      <Container className="ProfilePage">
        <Row>
          <Col className="Col_infor" xl={3}>
            <div className="infor">
              <div className="image">
                <Image
                  src="https://media.discordapp.net/attachments/1077147401363673108/1077147615742935070/Logo_web.jpg?width=598&height=598"
                  alt=""
                  fluid
                  rounded
                  width={"50px"}
                  height={"50px"}
                />
              </div>
              <div className="user_name">
                <span>Phước trí huỳnh</span>
                <div className="edit_user">
                  <i className="fa-solid fa-pen"></i>
                  <span>Sửa hồ sơ</span>
                </div>
              </div>
            </div>
            <ul>
              <li>
                <i className="fa-solid fa-user"></i>
                <span>Tài khoản của tôi</span>
              </li>
              <li>Hồ sơ</li>
              <li>Ngân hàng</li>
              <li>Địa chỉ</li>
              <li>Đổi mật khẩu</li>
              <li>
                <i className="fa-solid fa-newspaper"></i>
                <span>Đơn mua</span>
              </li>
              <li>
                <i className="fa-solid fa-bell"></i>
                <span>Thông Báo</span>
              </li>
            </ul>
          </Col>
          <Col className="Col_content" xl={9}>
            <div className="profile__header">
              <span>Hồ sơ của tôi</span>
              <p>quản lý thông tin hồ sơ cần xử lý</p>
            </div>

            {/* <table>
              <tr>
                <td>
                  <span>Tên đăng nhập</span>
                </td>
                <td>trí</td>
              </tr>
              <tr>
                <td>
                  <span>Email</span>
                </td>
                <td>
                  <input type="text" className="form-control" />
                </td>
              </tr>
              <tr>
                <td>
                  <span>Số điện thoại</span>
                </td>
                <td>
                  <input type="text" className="form-control" />
                </td>
              </tr>
              <tr>
                <td>
                  <span>Giới tính</span>
                </td>
                <td>
                  <input type="radio" className="form-check-input" />
                  Nam
                  <input type="radio" className="form-check-input" />
                  Nữ
                  <input type="radio" className="form-check-input" />
                  Khác
                </td>
              </tr>
              <tr>
                <td>
                  <span>Ngày sinh</span>
                </td>
                <td>
                  <select name="" id="">
                    <option value="">15</option>
                  </select>
                  <select name="" id="">
                    <option value="">Tháng 7</option>
                  </select>
                  <select name="" id="">
                    <option value="">2002</option>
                  </select>
                </td>
              </tr>
            </table> */}
            <div className="profile__header-container">
              <div className="profile__header-information">
                <div className="profile__header-table">
                  <div className="profile__header-both profile__header-contentone">
                    <span className="profile__header-span">Tên Đăng Nhập</span>
                    <span className="profile__header-span">Company Fruits</span>
                  </div>
                  <div className="profile__header-both profile__header-contenttwo">
                    <span className="profile__header-span">Tên</span>
                    <span className="profile__header-span">
                      Company Fruits Name
                    </span>
                  </div>
                  <div className="profile__header-both profile__header-contentthree">
                    <span className="profile__header-span">Email</span>
                    <span className="profile__header-span">
                      fruitcompanyweb@gmail.com
                      <span className="profile__header-child profile__header-childspan">Thay đổi</span>
                    </span>
                  </div>
                  <div className="profile__header-both profile__header-contentfour">
                    <span className="profile__header-span">Số Điện Thoại</span>
                    <span className="profile__header-span profile__header-childspan">Thêm</span>
                  </div>
                  <div className="profile__header-both profile__header-contentfive">
                    <span className="profile__header-span">Giới Tính</span>
                    <span className="profile__header-span">
                      <label htmlFor="radio1">Name</label>
                      <input type="radio" id="radio1" />
                      <label htmlFor="radio2">Nữ</label>
                      <input type="radio" id="radio2" />
                      <label htmlFor="radio3">Khác</label>
                      <input type="radio" id="radio3" />
                    </span>
                  </div>
                  <div className="profile__header-both profile__header-contentsix">
                    <span className="profile__header-span">Ngày Sinh</span>
                    <span className="profile__header-span">
                      <select name="selection-days" id="profile__header-days">
                        <option value="01">1</option>
                        <option value="02">2</option>
                        <option value="03">3</option>
                        <option value="04">4</option>
                        <option value="05">5</option>
                        <option value="06">6</option>
                        <option value="07">7</option>
                        <option value="08">8</option>
                        <option value="09">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                      </select>
                      <select
                        name="selection-months"
                        id="profile__header-months"
                      >
                        <option value="01">January</option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </select>
                      <select name="selection-years" id="profile__header-years">
                        <option value="2030">2030</option>
                        <option value="2029">2029</option>
                        <option value="2028">2028</option>
                        <option value="2027">2027</option>
                        <option value="2026">2026</option>
                        <option value="2025">2025</option>
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                        <option value="2007">2007</option>
                        <option value="2006">2006</option>
                        <option value="2005">2005</option>
                        <option value="2004">2004</option>
                        <option value="2003">2003</option>
                        <option value="2002">2002</option>
                        <option value="2001">2001</option>
                        <option value="2000">2000</option>
                        <option value="1999">1999</option>
                        <option value="1998">1998</option>
                        <option value="1997">1997</option>
                        <option value="1996">1996</option>
                        <option value="1995">1995</option>
                        <option value="1994">1994</option>
                        <option value="1993">1993</option>
                        <option value="1992">1992</option>
                        <option value="1991">1991</option>
                        <option value="1990">1990</option>
                        <option value="1989">1989</option>
                        <option value="1988">1988</option>
                        <option value="1987">1987</option>
                        <option value="1986">1986</option>
                        <option value="1985">1985</option>
                        <option value="1984">1984</option>
                        <option value="1983">1983</option>
                        <option value="1982">1982</option>
                        <option value="1981">1981</option>
                        <option value="1980">1980</option>
                        <option value="1979">1979</option>
                        <option value="1978">1978</option>
                        <option value="1977">1977</option>
                        <option value="1976">1976</option>
                        <option value="1975">1975</option>
                        <option value="1974">1974</option>
                        <option value="1973">1973</option>
                        <option value="1972">1972</option>
                        <option value="1971">1971</option>
                        <option value="1970">1970</option>
                        <option value="1969">1969</option>
                        <option value="1968">1968</option>
                        <option value="1967">1967</option>
                        <option value="1966">1966</option>
                        <option value="1965">1965</option>
                        <option value="1964">1964</option>
                        <option value="1963">1963</option>
                        <option value="1962">1962</option>
                        <option value="1961">1961</option>
                        <option value="1960">1960</option>
                        <option value="1959">1959</option>
                        <option value="1958">1958</option>
                        <option value="1957">1957</option>
                        <option value="1956">1956</option>
                        <option value="1955">1955</option>
                        <option value="1954">1954</option>
                        <option value="1953">1953</option>
                        <option value="1952">1952</option>
                        <option value="1951">1951</option>
                        <option value="1950">1950</option>
                        <option value="1949">1949</option>
                        <option value="1948">1948</option>
                        <option value="1947">1947</option>
                        <option value="1946">1946</option>
                        <option value="1945">1945</option>
                        <option value="1944">1944</option>
                        <option value="1943">1943</option>
                        <option value="1942">1942</option>
                        <option value="1941">1941</option>
                        <option value="1940">1940</option>
                        <option value="1939">1939</option>
                        <option value="1938">1938</option>
                        <option value="1937">1937</option>
                        <option value="1936">1936</option>
                        <option value="1935">1935</option>
                        <option value="1934">1934</option>
                        <option value="1933">1933</option>
                        <option value="1932">1932</option>
                        <option value="1931">1931</option>
                        <option value="1930">1930</option>
                        <option value="1929">1929</option>
                        <option value="1928">1928</option>
                        <option value="1927">1927</option>
                        <option value="1926">1926</option>
                        <option value="1925">1925</option>
                        <option value="1924">1924</option>
                        <option value="1923">1923</option>
                        <option value="1922">1922</option>
                        <option value="1921">1921</option>
                        <option value="1920">1920</option>
                        <option value="1919">1919</option>
                        <option value="1918">1918</option>
                        <option value="1917">1917</option>
                        <option value="1916">1916</option>
                        <option value="1915">1915</option>
                        <option value="1914">1914</option>
                        <option value="1913">1913</option>
                        <option value="1912">1912</option>
                        <option value="1911">1911</option>
                        <option value="1910">1910</option>
                        <option value="1909">1909</option>
                        <option value="1908">1908</option>
                        <option value="1907">1907</option>
                        <option value="1906">1906</option>
                        <option value="1905">1905</option>
                        <option value="1904">1904</option>
                        <option value="1903">1903</option>
                        <option value="1902">1902</option>
                        <option value="1901">1901</option>
                        <option value="1900">1900</option>
                      </select>
                    </span>
                  </div>
                </div>

                <button type="submit" className="btn btn-danger">
                  LƯU
                </button>
              </div>
              <div className="profile__header-avatar">
                <div className="profile__header-images">
                  <img src="https://ik.imagekit.io/alejk5lwty/image/73d7c068ddf4bb78a711f72f440b91ed-removebg-preview.png?updatedAt=1678593174049" alt="" className="profile__header-img" />
                </div>
                <input type="file" id="files" className="hidden" />
                <label htmlFor="files" className="profile__header-label">Chọn Ảnh</label>
                <div className="profile__header-description">
                  <div className="profile__header-spandes">
                    Dung Lượng file tối đa 1 MB Định dạng:JPEG,PNG
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Homefooter></Homefooter>
    </>
  );
}
