function greeting(name) {
    return `Hello ${name}, welcome to DevSecOps!`;
}

// tampilkan hasil di console browser
console.log(greeting("Mahasiswa"));

module.exports = greeting; // supaya bisa dites oleh Jest

