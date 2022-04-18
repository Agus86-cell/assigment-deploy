# Resume materi deployment

## Apa itu Deployment
Deployment adalah kegiatan yang bertujuan untuk menyebarkan aplikasi yang sudah kita buat. Harapannya aplikasi tersebut dapat diakses oleh banyak orang, tidak hanya oleh kita sendiri.

## Deploment dengan surge
Surge adalah layanan penerbit website statik (static web publishing) gratis untuk Front-End Developers. Website statik yang menggunakan surge akan memiliki subdomain *.surge.sh. Surge dapat menerima file HTML, CSS, dan JS.

cara mendeploy adalah 
1. Install surge menggunakan command "npm install --global surge"
2. jalankan perintah "surge" di terminal
3. teardown surge

## deployment dengan netlify
Netlify adalah salah satu platform penyedia layanan build tools sekaligus Continous Deployment. Netlify memungkinkan kita untuk mempublish website statis secara gratis. Netlify juga sudah terintegrasi dengan Git Host popular seperti Github, Gitlab dan Bitbucket.

cara mendeploy dengan netlify 
1. Buat akun Netlify (www.netlify.com)
2. Install Netlify CLI di terminal
3. Jalankan perintah netlify deploy di terminal.
4. Verify akun melalui browser, pilih Authorize
5. Pilih “Create & configure a new site”.
Untuk team, pilih yang sudah tersedia. Site name opsional.
6. Pilih lokasi file yang akan di deploy. Pilih ./build 

## Link untuk mengakses 
https://taskdeploy-i-gusti-agung-gde-abhirama-adnyana.netlify.app/


