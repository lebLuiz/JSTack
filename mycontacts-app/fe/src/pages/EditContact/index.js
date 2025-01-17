import { useEffect, useRef, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import ContactsService from '../../services/ContactsService';

import toast from '../../utils/toast';
import useSafeAsyncAction from '../../hooks/useSafeAsyncAction';

import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import Loader from '../../components/Loader';

export default function EditContact() {
    const [isLoading, setIsLoading] = useState(true);
    const [contactName, setContactName] = useState('');
    const contactFormRef = useRef(null);

    const { id } = useParams();
    const history = useHistory();
    const safeAscynAction = useSafeAsyncAction();

    useEffect(() => {
        async function loadContact() {
        try {
            const contact = await ContactsService.getContactById(id);

            safeAscynAction(() => {
                contactFormRef.current.setFieldsValues(contact);
                setIsLoading(false);
                setContactName(contact.name);
            });
        } catch {
            safeAscynAction(() => {
                history.push('/');
                toast({
                    type: 'danger',
                    text: 'Contato não encontrado!',
                });
            });
        }
        }
        loadContact();
    }, [id, history, safeAscynAction]);

    async function handleSubmit(contact) {
        try {
        const contactData = await ContactsService.updateContact(
            id,
            contact,
        );

        setContactName(contactData.name);
            toast({
                type: 'success',
                text: 'Contato editado com sucesso!',
            });
        } catch (error) {
            toast({
                type: 'danger',
                text: 'Ocorreu um erro ao editar o contato!',
            });
        }
    }

    return (
        <>
            <Loader isLoading={isLoading} />

            <PageHeader
                title={isLoading ? 'Carregando...' : `Editar ${contactName}`}
            />

            <ContactForm
                ref={contactFormRef}
                buttonLabel="Editar"
                onSubmit={handleSubmit}
            />
        </>
    );
}
