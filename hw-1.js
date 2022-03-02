const folders = [
  {
    id: 5,
    name: "Klasör 1",
    files: [
      { id: 17, name: "profil.jpg" },
      { id: 18, name: "manzara.jpg" },
    ],
  },
  {
    id: 6,
    name: "Klasör 2",
    files: [
      { id: 21, name: "foto.png" },
      { id: 22, name: "dosya.xls" },
    ],
  },
  {
    id: 7,
    name: "Klasör 3",
  },
];

// Move
function move(a, b) {
  let data;
  folders.map((folder) => {
    folder.files?.map((file) => {
      if (file.id === a) {
        data = file;
      }
      folder.files = folder.files.filter((x) => x.id !== a);
    });
  });
  folders.map((folder) => {
    if (folder.id === b) {
      folder.files.push(data);
    }
  });
  folders.map((folder) => {
    console.log(folder);
  });
}
// Copy
function copy(a, b) {
  let data;
  folders.map((folder) => {
    folder.files?.map((file) => {
      if (file.id === a) {
        data = file;
      }
    });
  });
  folders.map((folder) => {
    if (folder.id === b) {
      folder.files.push(data);
    }
  });
  folders.map((folder) => {
    console.log(folder);
  });
}
// Remove
function remove(a) {
  folders.map((folder) => {
    folder.files?.map((file) => {
      if (file.id === a) {
        folder.files = folder.files.filter((x) => x.id !== a);
      }
    });
    console.log(folder);
  });
}
// ---------- 2.YÖNTEM | Remove ----------
// function remove(a) {
//   folders.map((folder) => {
//     folder.files?.map((file, index) => {
//       if (file.id === a) {
//         folder.files.splice(index, 1);
//       }
//     });
//     console.log(folder);
//   });
// }

// RemoveFolder
function removeFolder(a) {
  folders.map((folder) => {
    if (folder.id === a) {
      folder = folders.filter((x) => x.id !== a);
      console.log("emreFolder", folder);
    }
  });
}

// ParentFolderOf
function parentFolderOf(a) {
  folders.map((folder) => {
    folder.files?.map((file) => {
      if (file.id === a) {
        console.log(folder.id);
      }
    });
  });
}

// move(18, 6); // dosyayı klasöre taşıyacak
// copy(18, 6); // kopyasını oluşturacak
// remove(21); // dosyayı silecek
// removeFolder(6); //klasörü ve altındaki tüm dosyaları silecek
// parentFolderOf(17); // ==> 5
