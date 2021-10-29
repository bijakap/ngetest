import React from 'react'
import {Link} from 'react-router-dom'
import Gambar from '../img/back1.jpg'

function testbs(){
    return (
      <div>
        <div id="home">
          <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <a class="navbar-brand" href="#">MAKAN BANG</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResposnsive">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarResposnsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link" href="#home">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#regis">Registration</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#about">About</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>


        <div class="landing">
          <div class="home-wrap">
            <div class="home-inner">
              <img src={Gambar} alt="gambar"></img>
            </div>
          </div>
        </div>

        <div class="caption text-center">
          <h1>Selamat Datang</h1>
          <h3>Di Makan Bang UKM</h3>
          <a class="btn btn-outline-light btn-lg" href="#regis">Daftar Disini</a>
        </div>

        <div id="regis" class="offset">
          <div class="row justify-content-center">
            <div class="col-6 text-center">
              <br/>
              <br/>
                <h5>Pendaftaran Keanggotaan UKM</h5>
              <br/>
              <br/>
            
              <form>
                <div class="form-group">
                  <label for="InputNama">Nama Lengkap</label>
                  <input type="text" class="form-control" id="InputNama" placeholder="Nama Lengkap"/>
                </div>
                <div class="form-group">
                  <label for="inputFakultas">Fakultas</label>
                  <select id="inputFakultas" class="form-control">
                    <option selected>Pilih..</option>
                    <option>Fakultas Teknik Elektro</option>
                    <option>Fakultas Teknik Informatika</option>
                    <option>Fakultas Rekayasa Industri</option>
                    <option>Fakultas Ekonomi dan Bisnis</option>
                    <option>Fakultas Komunikasi dan Bisnis</option>
                    <option>Fakultas Industri Kreatif</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="InputNomor">Nomor Telepon</label>
                  <input type="text" class="form-control" id="InputNomor" placeholder="Nomor Telepon Yang Bisa Dikontak"/>
                </div>
                <div class="form-group">
                  <label for="inputAlamat">Alamat Tempat Tinggal</label>
                  <input type="text" class="form-control" id="inputAlamat" placeholder="Isi Alamat Asrama Bila Tinggal di Asrama"/>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                  <label class="form-check-label" for="inlineRadio1">Tinggal di Asrama</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                  <label class="form-check-label" for="inlineRadio2">Dirumah Orang Tua</label>
                </div>
                <br/>
                <br/>
                <p><button type="submit" class="btn btn-dark">Sign in</button></p>
              </form>
            </div>
          </div>
        </div>

        <div id="about" class="offset">
          <footer>
            <div class="row justify-content-center">
              <div class="col-md-5 text-center">
                <p><strong>Makan Bang</strong> Adalah UKM untuk mahasiswa yang kegiatannya hanya makan dan gagabutan, UKM ini cocok untuk anda yang gabut harus ngapain untuk menghabiskan waktu dan 	<strong>COCOK JUGA</strong> untuk anda yang ingin menghabiskan uang wkwkwkwkwkw.</p>
                <strong>Contact Info</strong>
                <p>+627737771211 <br/> younglex.trinity@gmail.com </p>
                <Link to='/'>Back to Home</Link>
              </div>
              <hr class="socket"/>
              &copy; Ini Hanya Tugas Kuliah :)
            </div>
          </footer>
        </div>
      </div>
    )
}

export default testbs