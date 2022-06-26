import { useState, useEffect } from "react";
import { Modal, Container } from "react-bootstrap";
import Avatar from "react-avatar";
import axios from "axios";
import "./style.css";
export const Applicants = props => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://jobs-api.squareboat.info/api/v1/recruiters/jobs/${props.jobId}/candidates`,
        {
          headers: {
            Authorization: props.token
              ? props.token
              : localStorage.getItem("token")
          }
        }
      );
      setCardData(data.data);
    };
    getData();
  }, [props.jobId, props.token]);
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" size="lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Applicants for this job
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <div className="card_container">
            {cardData?.map(item => (
              <div className="applicant__card">
                <div className="card_header">
                  <div>
                    <Avatar
                      className="mr-2"
                      name={item.name}
                      size="45"
                      round={true}
                    />
                  </div>
                  <div className="card_header_title">
                    <h5>{item.name}</h5>
                    <p>{item.email}</p>
                  </div>
                </div>
                <div>
                  <h5>Skills</h5>
                  <p>{item.skills}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
