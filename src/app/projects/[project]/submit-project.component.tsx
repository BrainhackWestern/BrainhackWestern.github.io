import { Button } from '../../../components/button';
import Callout from '../../../components/callout';
import Col from '../../../components/layout/col';
import Row from '../../../components/layout/row';
import { RegisterButton } from '../../../components/register-button';
import { readConfig } from '../../../lib/data';
import { textSize } from '../../../styles/variables.css';

const SubmitProject = async ({ noProjectsYet }: { noProjectsYet: boolean }) => {
  const { registration, event } = await readConfig();
  const msg = noProjectsYet ? (
    <>
      <h2>No projects yet!</h2>
      <br />
      <p style={{ fontSize: textSize.lg, margin: 0 }}>Be the first to submit</p>
    </>
  ) : (
    <>
      <h2>Submit a project!</h2>
      <br />
      <p style={{ fontSize: textSize.lg, margin: 0 }}>
        Or check out the pitches from other teams
      </p>
    </>
  );
  return (
    <Callout>
      <Row>
        <Col
          lg="6"
          className="d-flex flex-column align-items-center justify-content-center"
        >
          {msg}
        </Col>
        <Col lg="6">
          <Row>
            <Col
              xxl="6"
              className="d-flex flex-column align-items-center justify-content-between"
            >
              <p style={{ fontSize: textSize.lg }}>Start by registering</p>
              <RegisterButton
                settings={registration}
                alignment="center"
                eventTimespan={event.eventTimespan}
              />
            </Col>
            <Col
              xxl="6"
              className="d-flex flex-column align-items-center justify-content-between"
            >
              <p style={{ fontSize: textSize.lg }}>Then submit a project</p>
              <Button target={registration.projectPitchUrl}>
                Submit Project Pitch
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Callout>
  );
};

export default SubmitProject;
