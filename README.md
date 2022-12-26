## Instalnya

1. Pertama bikin database mysql dulu dengan nama `portgen_db`
2. Bikin file `.env` di dalem folder /server
2. Buka terminal di folder repo ini lalu `npm install` dulu, setelah keinstal semuanya lalu `npm run build`
3. Kalau udah, langsung `npm run test` sekali doang, buat import tablenya otomatis, kalau dah muncul tablenya di phpmyadmin, langsung close ae dah cmdnya Ctrl+C.
4. Abis itu terakhir `npm run dev` buat jalanin server backend sama react frontendnya sekaligus.

## Note buat development
1. Bagian backend di folder server, Buat run backend express `npm run server`
2. Bagian frontend di folder client, Buat run frontend react `npm run client`
3. Buat run keduanya `npm run dev`
