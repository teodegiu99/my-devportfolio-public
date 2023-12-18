import React, {useState} from 'react';
import styles from './mobileform.module.scss'
import {StandardButton} from '../../buttons/StandardButton';
import {Reveal} from '../../utils/Reveal';
import { sendMail } from "@/app/api/SendMail";

interface FormState {
    email : string;
    nome : string;
    descrizione : string;
}

// Componente principale del form
const MobileForm : React.FC = () => {
    // Stato iniziale del form
    const initialFormState : FormState = {
        email: '',
        nome: '',
        descrizione: ''
    };
    const [emailSent, setEmailSent] = useState<boolean>(false);

    // Stato attuale del form
    const [formState,
        setFormState] = useState < FormState > (initialFormState);
    // Stato per il messaggio di errore dell'email
    const [emailError,
        setEmailError] = useState < string | null > (null);

    // Funzione di validazione dell'email
    const validateEmail = (email : string) : boolean => {
        // Utilizza un'espressione regolare per la validazione semplice dell'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Gestisci il cambio di valore nei campi del form
    const handleInputChange = (event : React.ChangeEvent < HTMLInputElement | HTMLTextAreaElement >) => {
        const {name, value} = event.target;

        // Gestisci la validazione dell'email
        if (name === 'email') {
            const isValidEmail = validateEmail(value);
            setEmailError(isValidEmail
                ? null
                : 'Enter a valid email address');
        }

        setFormState((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    // Gestisci l'invio del form
    const  handleSubmit= async (event : React.FormEvent) => {
        event.preventDefault();

        // Verifica se ci sono errori prima di procedere con l'invio
        if (emailError) {
            console.log('Form non valido. Correggi gli errori.');
            return;
        }

        // Raccolti i dati nel formData
        const formData = {
            email: formState.email,
            nome: formState.nome,
            descrizione: formState.descrizione
        };

        try {
        await sendMail(formData);

        // Puoi inserire qui la logica per gestire l'invio del form con formData
        console.log('Form inviato:', formData);

        // Resetta lo stato del form dopo l'invio
        setFormState(initialFormState);
        setEmailSent(true);
        } catch (error) {
            console.log("errore mail")
        }
    };

    // Renderizza il componente
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Reveal>
                    <div className={styles.textlabel1}>
                        <label htmlFor="email">Email:</label>
                    </div>
                </Reveal>
                <Reveal width='100%'>
                    <>
                        <input
                        className={styles.inputbox}
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        required/> {emailError && <p style={{
                        color: 'red'
                    }}>{emailError}</p>}
                </>
            </Reveal>
        </div>
        <div>
            <Reveal>
                <div className={styles.textlabel2}>
                    <label htmlFor="nome">Name:</label>
                </div>
            </Reveal>
            <Reveal width='100%'>
                <input
                    className={styles.inputbox}
                    type="text"
                    id="nome"
                    name="nome"
                    value={formState.nome}
                    onChange={handleInputChange}
                    required/>
            </Reveal>
        </div>
        <div>
          <Reveal>
            <div className={styles.textlabel2}>
                <label className={styles.label} htmlFor="descrizione">Description:</label>
            </div>
            </Reveal>
            <Reveal width='100%'>
                <textarea
                    className={`${styles.inputbox} ${styles.textarea}`}
                    id="descrizione"
                    name="descrizione"
                    value={formState.descrizione}
                    onChange={handleInputChange}
                    required/>
            </Reveal>

        </div>
        {emailSent && (
                <div>
                    <p style={{ color: 'green' }}>Sent! I'll get back to you ASAP 😎</p>
                </div>
            )}
        <Reveal>
        <div className={styles.btn}>
            <StandardButton onClick={handleSubmit}>
                Send
            </StandardButton>
        </div>
        </Reveal>
    </form>
    );
};

export default MobileForm;
