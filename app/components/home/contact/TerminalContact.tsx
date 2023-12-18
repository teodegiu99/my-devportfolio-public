'use client'

import styles from "./terminalcontact.module.scss"
import { motion } from "framer-motion";
import { sendMail } from "@/app/api/SendMail";
import { FiCheckCircle } from "react-icons/fi";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  Fragment,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

const TerminalContact = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <section
      className={styles.bg}>
      <div
        ref={containerRef}
        onClick={() => {
          inputRef.current?.focus();
        }}
        className={styles.window}>
        <TerminalHeader />
        <TerminalBody inputRef={inputRef} containerRef={containerRef} />
      </div>
    </section>
  );
};

const TerminalHeader = () => {
  return (
    <div className={styles.topBar}>
      <div className={styles.redCircle} />
      <div className={styles.yellowCircle} />
      <div className={styles.greenCircle}/>
      <span className={styles.topBarTitle}>
        dev.matteodegiuseppe@gmail.com
      </span>
    </div>
  );
};

const TerminalBody = ({ containerRef, inputRef }: TerminalBodyProps) => {
  const [focused, setFocused] = useState(false);
  const [text, setText] = useState("");

  const [questions, setQuestions] = useState(QUESTIONS);

  const curQuestion = questions.find((q) => !q.complete);

  const handleSubmitLine = (value: string) => {
    if (curQuestion) {
      setQuestions((pv) =>
        pv.map((q) => {
          if (q.key === curQuestion.key) {
            return {
              ...q,
              complete: true,
              value,
            };
          }
          return q;
        })
      );
    }
  };

  return (
    <div className={styles.text1}>
      <InitialText />
      <PreviousQuestions questions={questions} />
      <CurrentQuestion curQuestion={curQuestion} />
      {curQuestion ? (
        <CurLine
          text={text}
          focused={focused}
          setText={setText}
          setFocused={setFocused}
          inputRef={inputRef}
          command={curQuestion?.key || ""}
          handleSubmitLine={handleSubmitLine}
          containerRef={containerRef}
        />
      ) : (
        <Summary questions={questions} setQuestions={setQuestions} />
      )}
    </div>
  );
};

const InitialText = () => {
  return (
    <>
      <p>Hey there! I'm excited to link 🔗</p>
      <p className={styles.InitialText}>
        --------------------------------------------------------------------------------
      </p>
    </>
  );
};

const PreviousQuestions = ({ questions }: PreviousQuestionProps) => {
  return (
    <>
      {questions.map((q, i) => {
        if (q.complete) {
          return (
            <Fragment key={i}>
              <p>
                {q.text || ""}
                {q.postfix && (
                  <span className={styles.text2}>{q.postfix}</span>
                )}
              </p>
              <p className={styles.text3}>
                <FiCheckCircle className={styles.icon} />
                <span>{q.value}</span>
              </p>
            </Fragment>
          );
        }
        return <Fragment key={i}></Fragment>;
      })}
    </>
  );
};

const CurrentQuestion = ({ curQuestion }: CurrentQuestionProps) => {
  if (!curQuestion) return <></>;

  return (
    <p>
      {curQuestion.text || ""}
      {curQuestion.postfix && (
        <span className={styles.text2}>{curQuestion.postfix}</span>
      )}
    </p>
  );
};

const Summary = ({ questions, setQuestions }: SummaryProps) => {
  const [complete, setComplete] = useState(false);

  const handleReset = () => {
    setQuestions((pv) => pv.map((q) => ({ ...q, value: "", complete: false })));
  };

  const handleSend = async () => {
    const formData = questions.reduce((acc, val) => {
      return { ...acc, [val.key]: val.value };
    }, {});

    try{
        await sendMail(formData);




    console.log(formData);

    setComplete(true);
    } catch (error) {
      console.log("errore");
    }
  };

  return (
    <>
      <p className={styles.space}>Beautiful! Here's what I've got:</p>
      {questions.map((q) => {
        return (
          <p key={q.key}>
            <span className={styles.text4}>{q.key}:</span> {q.value}
          </p>
        );
      })}
      <p className={styles.space}>Look good?</p>
      {complete ? (
        <p className={styles.text3}>
          <FiCheckCircle className={styles.icon} />
          <span>Sent! I'll get back to you ASAP 😎</span>
        </p>
      ) : (
        <div className={styles.btnContainer}>
          <button
            onClick={handleReset}
            className={styles.resetBtn}>
            Restart
          </button>
          <button
            onClick={handleSend}
            className={styles.sendBtn}
          >
            Send it!
          </button>
        </div>
      )}
    </>
  );
};

const CurLine = ({
  text,
  focused,
  setText,
  setFocused,
  inputRef,
  command,
  handleSubmitLine,
  containerRef,
}: CurrentLineProps) => {
  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmitLine(text);
    setText("");
    setTimeout(() => {
      scrollToBottom();
    }, 0);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    scrollToBottom();
  };

  useEffect(() => {
    return () => setFocused(false);
  }, []);

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          ref={inputRef}
          onChange={onChange}
          value={text}
          type="text"
          className={styles.sronly}
          autoComplete="off"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      </form>
      <p>
        <span className={styles.text5}>➜</span>{" "}
        <span className={styles.text6}>~</span>{" "}
        {command && <span className={styles.opacity}>Enter {command}: </span>}
        {text}
        {focused && (
          <motion.span
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1,
              ease: "linear",
              times: [0, 0.5, 0.5, 1],
            }}
            className={styles.selector}
          />
        )}
      </p>
    </>
  );
};

export default TerminalContact;

const QUESTIONS: QuestionType[] = [
  {
    key: "email",
    text: "To start, could you give me ",
    postfix: "your email?",
    complete: false,
    value: "",
  },
  {
    key: "name",
    text: "Awesome! And what's ",
    postfix: "your name?",
    complete: false,
    value: "",
  },
  {
    key: "description",
    text: "Perfect, and ",
    postfix: "how can I help you?",
    complete: false,
    value: "",
  },
];

interface CurrentLineProps {
  text: string;
  focused: boolean;
  setText: Dispatch<SetStateAction<string>>;
  setFocused: Dispatch<SetStateAction<boolean>>;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  command: string;
  handleSubmitLine: Function;
  containerRef: MutableRefObject<HTMLDivElement | null>;
}

type QuestionType = {
  key: string;
  text: string;
  postfix?: string;
  complete: boolean;
  value: string;
};

interface TerminalBodyProps {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  inputRef: MutableRefObject<HTMLInputElement | null>;
}

interface PreviousQuestionProps {
  questions: QuestionType[];
}

interface SummaryProps {
  questions: QuestionType[];
  setQuestions: Dispatch<SetStateAction<QuestionType[]>>;
}

interface CurrentQuestionProps {
  curQuestion: QuestionType | undefined;
}