export default function DonationSection() {
  return (
    <section style={{ textAlign:'center', padding:'60px 20px', background:'#f9fafb' }}>
      
      <h2 style={{ fontSize:'32px', marginBottom:'10px' }}>
        Support Our Work
      </h2>

      <p style={{ fontSize:'18px', maxWidth:'600px', margin:'0 auto 30px' }}>
        Your donation helps provide education, food, and essential support to children and families in need.
        Every contribution makes a real impact.
      </p>

      <a 
        href="https://donate.stripe.com/28EbJ2bKhdrfbQO8928k800" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <button style={{
          backgroundColor:'#16a34a',
          color:'white',
          padding:'16px 28px',
          fontSize:'18px',
          border:'none',
          borderRadius:'10px',
          cursor:'pointer'
        }}>
          ❤️ Donate Now
        </button>
      </a>

      <p style={{ fontSize:'14px', color:'#555', marginTop:'15px' }}>
        🔒 Secure payments powered by Stripe
      </p>

    </section>
  );
}
