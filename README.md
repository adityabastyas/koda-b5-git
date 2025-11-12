# PRAKTEK GIT

## Inisialisasi GIT

<!-- ```js
const a = 1
``` -->

```sh
$ git init
```

## Perubahan Sementara (Staging)

Menyimpan perubahan sementara dari working directory ke dalam staging area

```sh
$ git add <...dir_file>
$ git add <...dir_folder>
```

## Perubahan Permanen (Commit)

Menyimpan seluruh staging menjadi permanen, pesan commit mengikuti berdasarkan konventional commit

```sh
$ git commit
$ git commit -m "<pesan>"
```

## Pengecekan Status Working Directory

Bisa digunakan untuk melihat status baik yang sudah di staging area ataupun belum

////////////

## Management git remote

```sh
$ git remote <command> <argument>
```

Digunakan untuk menghubungkan antara git yang di komputer lokal dengan git yang ada di penyedia layanan git (github, gitlab, dll)

git remote get-url <alias_remote>

## syncronization

Digunakan untuk sinkronisasi dari lokal ke remote

```sh
$ git push [-u] <tujuan_remote> <branch_lokal>
```

Digunakan untuk sinkronisasi dari remote ke lokal

```sh
$ git pull <target_remote> <branch_remote>
```
