import React from 'react';
import { LeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import style from './About.module.css';
export default function About() {
  const navigate = useNavigate();
  const toHome = () => {
    navigate('/');
  };
  return (
    <div className={style.content}>
      <div className={style.container}>
        <LeftOutlined className={style.leftIcon} onClick={toHome} />
        <div className={style.textContent}>
          <h3 className={style.firstTitle}>Character.ai</h3>
          <h4 className={style.secondTitle}>About us</h4>
          <p>
            Character.AI is bringing to life the science-fiction dream of
            open-ended conversations and collaborations with computers.
          </p>
          <p>
            e are building the next generation of dialog agents; with a
            long-tail of applications spanning entertainment, education, general
            question-answering and others.
          </p>
          <p>
            Our dialog agents are powered by our own proprietary technology
            based on large language models, built and trained from the ground up
            with conversation in mind.
          </p>
          <p>
            You can find out more about Character.AI from our <a>Blog</a> or
            from some featured <a>Press</a> coverage.
          </p>
          <h4 className={style.secondTitle}>
            How does the Character.AI beta work?
          </h4>
          <p>
            The Character.AI beta is based on neural language models. A
            supercomputer reads huge amounts of text and learns to hallucinate
            what words might come next in any given situation. Models like these
            have many uses including auto-complete and machine translation.
          </p>
          <p>
            At Character.AI, you collaborate with the computer to write a dialog
            you write one character is lines, and the computer creates the other
            character is lines, giving you the illusion that you are talking
            with the other character.
          </p>
          <p>
            Needless to say, a hallucinating supercomputer is not a source of
            reliable information. Still, we hope that you find Character.AI a
            useful tool for imagination, brainstorming, language learning, and a
            host of other purposes we have ourselves not yet imagined :)
          </p>
          <h4 className={style.secondTitle}>Contact us</h4>
          <p>
            If you have any questions or need help, visit our <a>Help Center</a>
            .
          </p>
          <p>
            For information, partnerships, billing, press, or any additional
            questions, please submit a ticket at <a>support.character.ai</a>.
          </p>
          <h4 className={style.secondTitle}>Community</h4>
          <p>
            Find us on <a>Twitter</a>,<a>Reddit</a>,<a>Discord</a>,
            <a>FaceBook</a>,and<a>Instagram</a>
          </p>
          <h4 className={style.secondTitle}>Work with us</h4>
          <p>
            We are actively recruiting,<a>come work with us</a>.
          </p>
          <p>
            Use of Character.AI is bound by our <a>Terms of Service </a>and{' '}
            <a>Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
