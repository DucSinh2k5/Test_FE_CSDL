// ================== Login Logic ==================
const admin = { email: "admin@example.com", password: "admin123", role: "admin", name: "Admin" };
const user = { email: "user@example.com", password: "user123", role: "user", name: "Người Dùng" };

const form = document.getElementById("loginForm");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const error = document.getElementById("error");

        if (email === admin.email && password === admin.password) {
            localStorage.setItem("role", "admin");
            localStorage.setItem("name", admin.name);
            window.location.href = "admin.html";
        } else if (email === user.email && password === user.password) {
            localStorage.setItem("role", "user");
            localStorage.setItem("name", user.name);
            window.location.href = "user.html";
        } else {
            error.textContent = "Sai email hoặc mật khẩu!";
        }
    });
}

// ================== Role Verification ==================
const role = localStorage.getItem("role");
const name = localStorage.getItem("name");

if (document.title.includes("Admin")) {
    if (role !== "admin") window.location.href = "index.html";
    document.getElementById("adminName").textContent = name || "Admin";
} else if (document.title.includes("Người Dùng")) {
    if (role !== "user") window.location.href = "index.html";
    document.getElementById("userName").textContent = name || "Người Dùng";
}

// ================== Logout ==================
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.clear();
        window.location.href = "index.html";
    });
}

// ================== Admin Save Product Demo ==================
const saveBtn = document.getElementById("saveProduct");
if (saveBtn) {
    saveBtn.addEventListener("click", () => {
        const name = document.getElementById("productName").value;
        const price = document.getElementById("productPrice").value;
        const msg = document.getElementById("saveMsg");
        msg.textContent = `Đã lưu: ${name} - ${price} VND`;
        setTimeout(() => (msg.textContent = ""), 2500);
    });
}
