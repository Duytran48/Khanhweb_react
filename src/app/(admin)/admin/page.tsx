import Link from "next/link";

export default function AdminPlaceholder() {
  return (
    <div style={{ maxWidth: "1240px", margin: "40px auto", padding: "0 24px" }}>
      <div
        style={{
          padding: "32px",
          borderRadius: "16px",
          background: "#f8fafc",
          border: "1px solid #e2e8f0",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#3261ceff", marginBottom: "12px" }}>
          {" "}
          Khu vực Quản Trị Viên (Admin Portal)
        </h1>
        <p style={{ color: "#64748b", marginBottom: "24px" }}>
          Khung UI quản trị người dùng, ngân hàng đề thi và thống kê hệ thống
          (Đang chuẩn bị tích hợp BE).
        </p>
        <Link
          href="/"
          style={{
            display: "inline-block",
            padding: "10px 20px",
            background: "#059669",
            color: "#fff",
            borderRadius: "8px",
            fontWeight: 600,
          }}
        >
          ← Quay lại trang Học viên (Student)
        </Link>
      </div>
    </div>
  );
}
