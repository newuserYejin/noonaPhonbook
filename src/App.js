import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';

// 1. 왼쪽에는 열락처 등록 폼이 있고, 오른쪽에는 연락처 리스트와 search창이 있다.
// 2. 리스트에 이름과 전화번호를 추가할 수 있다.
// 3. 리스트에아이템이 몇개 있는지 보인다.
// 4. 사용자가 유저를 이름 검색으로 찾을 수 있다.

function App() {
  return (
    <div>
      <h1 className='title'>Phone Book</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
