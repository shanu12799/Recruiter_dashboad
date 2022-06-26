import { useState, useEffect } from "react";
import axios from "axios";
import { Applicants } from "./Applicants";
import { Container } from "react-bootstrap";
import { Card } from "../../components/Card";
import "./style.css";
export const Jobs = ({ token }) => {
  const [cardData, setCardData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [jobId, setJobId] = useState("");
  const [page, setPage] = useState(1);
  const handelChange = id => {
    setJobId(id);
    setModalShow(true);
  };

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://jobs-api.squareboat.info/api/v1/recruiters/jobs?page=${page}`,
        {
          headers: {
            Authorization: token
              ? token
              : JSON.parse(localStorage.getItem("tokenLocal"))
          }
        }
      );
      setCardData(data.data.data);
    };
    getData();
  }, [page, token]);
  return (
    <>
      <div className="app__job-top"></div>
      <div className="app__job_container">
        <Container className="md-5 ">
          <h5>Jobs posted by you</h5>
          <div className="app__jobs_cards">
            {cardData?.map(item => (
              <Card item={item} handelChange={handelChange} />
            ))}
          </div>
        </Container>
        <nav
          aria-label="Page navigation example"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3rem"
          }}
        >
          <ul class="pagination">
            <li class="page-item">
              <a
                class="page-link"
                href="/#"
                onClick={() => (page > 1 ? setPage(page - 1) : setPage(1))}
              >
                Previous
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="/#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="/#" onClick={() => setPage(page + 1)}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <Applicants
        show={modalShow}
        jobId={jobId}
        token={token}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};
