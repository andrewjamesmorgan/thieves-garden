import InfoBox from '../../InfoBox';

export default function ContactCell({action}) {

  const body = `
    <h3>Contact us</h3>
    <p>Use the on-line form to submit a question (or get in touch using any of the methods you see at the bottom of this page.</p>
  `;

  return (
    <InfoBox 
        imageSrc="../../images/contact/maidenhead-post-box.jpeg"
        alt="Traditional, red, British postbox. Set on grass, with a wooden fence and trees behind it"
        action={action}
        route="/contact"
        body={body}
    /> 
  );
}