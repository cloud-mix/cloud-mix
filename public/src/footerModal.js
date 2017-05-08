import React from 'react';
import {Modal} from 'react-materialize';

const FooterModal = () => (
  <Modal
    header='About us'
    bottomSheet
    className="footerModal"
    trigger={
      <a className="grey-text text-lighten-4 right">About</a>
    }>
    <div className="portrait">
      <img src="../images/about_us.png" className="portraitImg"/>
    </div>
  </Modal>
)

export default FooterModal;