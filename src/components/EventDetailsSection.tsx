import { weddingData } from "../data";

export default function EventDetailsSection() {
  return (
    <section className="event-details-section scroll-reveal">
      <h2 className="section-title adelia-font" style={{ textAlign: "center" }}>
        Trân Trọng Kính Mời
      </h2>
      <div className="event-card">
        <div className="bride-groom-photos">
          <div className="bride-photo">
            <img src={weddingData.bride.photo} alt="Cô dâu" />
          </div>
          <div className="groom-photo">
            <img src={weddingData.groom.photo} alt="Chú rể" />
          </div>
        </div>
        <span className="heart-icon">♥</span>

        {/* Family Information */}
        <div className="family-info-simple">
          <div className="family-info-bride">
            <h4>NHÀ GÁI</h4>
            <p>Ông. {weddingData.brideFamily.father}</p>
            <p>Bà. {weddingData.brideFamily.mother}</p>
            <p>{weddingData.brideFamily.address}</p>
          </div>
          <div className="family-divider">
            <div className="love-letters">
              <span className="love-letter">L</span>
              <span className="love-letter">O</span>
              <span className="love-letter">V</span>
              <span className="love-letter">E</span>
            </div>
          </div>
          <div className="family-info-groom">
            <h4>NHÀ TRAI</h4>
            <p>Ông. {weddingData.groomFamily.father}</p>
            <p>Bà. {weddingData.groomFamily.mother}</p>
            <p>{weddingData.groomFamily.address}</p>
          </div>
        </div>

        <h3>{weddingData.venue.name}</h3>
        <p>
          <strong>Địa chỉ:</strong> {weddingData.venue.address}
        </p>
        <p>({weddingData.venue.floor})</p>
        <p>
          <strong>Thời gian:</strong> {weddingData.weddingDate.time}
        </p>
        <p>
          <strong>Ngày:</strong> {weddingData.weddingDate.date}
        </p>
        <p
          style={{
            fontSize: "0.95rem",
            marginTop: "20px",
            fontStyle: "italic",
          }}
        >
          ({weddingData.weddingDate.lunarDate})
        </p>
        <p
          style={{
            fontSize: "0.95rem",
            marginTop: "15px",
            fontStyle: "italic",
          }}
        >
          Sự hiện diện của Quý Khách
          <br />
          là niềm vinh hạnh cho
          <br />
          gia đình chúng tôi.
        </p>
        <p style={{ marginTop: "20px" }}>
          <strong>KÍNH MỜI!</strong>
        </p>
      </div>
    </section>
  );
}
