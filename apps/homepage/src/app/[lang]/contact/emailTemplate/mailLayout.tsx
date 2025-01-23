type MailLayoutProps = {
  children: React.ReactNode;
}

export const MailLayout = ({ children }: MailLayoutProps) => {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&family=Sen:wght@400..800&display=swap" rel="stylesheet" />
      </head>
      <div style={{
        backgroundColor: "#f6f9fc",
        paddingTop: "50px",
        paddingBottom: "50px"
      }}>
        <div
          style={{
            backgroundColor: "#eaf5fc",
            color: "#000000",
            padding: "30px",
            fontFamily: "'Sen', -apple-system,'SF Pro Display','SF Pro Text','Helvetica',sans-serif",
            borderRadius: "50px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            maxWidth: "600px",
            margin: "0 auto"
          }}
        >
          <div style={{ paddingTop: '30px', paddingBottom: '30px' }}>
          {children}
          </div>
       </div>
      </div>
    </html>

  );
}