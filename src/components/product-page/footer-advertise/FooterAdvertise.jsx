import "./FooterAdvertise.css";

export default function FooterAdvertise() {
  return (
    <div className="advertise-wrapper">
      <div className="advertise-text">
        <h1>Join the Elite Experience</h1>

        <p>
          Subscribe to receive first access to our seasonal releases and private
          event invitations.
        </p>

        <div className="advertise-form">
          <input type="email" placeholder="Enter your business email" />

          <button>Join Club</button>
        </div>
      </div>
    </div>
  );
}
