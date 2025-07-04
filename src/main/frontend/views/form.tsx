import { ViewConfig } from '@vaadin/hilla-file-router/types.js';
import { TextField, Button, Notification, EmailField } from '@vaadin/react-components';
import { useSignal } from '@vaadin/hilla-react-signals';
import { Detail } from 'Frontend/types/detail';

export const config: ViewConfig<Detail> = {
  title: 'Example of a Form',
  menu: {
    title: 'Form Example',
    order: 2,
    icon: 'line-awesome/svg/file-invoice-solid.svg'
  },
  detail: {
    description: 'Demonstrates a simple form with two fields',
    badge: {
      text: 'New',
      variant: 'info'
    }
  }
};

export default function FormView() {
  const name = useSignal('John Doe');
  const email = useSignal('john.doe@example.com');

  const handleSubmit = () => {
    Notification.show(`Submitted: ${name.value}, ${email.value}`);
  };

  return (
    <section className="flex flex-col gap-m p-m max-w-xs">
      <form className="flex flex-col gap-m">
        <TextField
          label="Name"
          value={name.value}
          onValueChanged={e => (name.value = e.detail.value)}
          required
        />
        <EmailField
          label="Email"
          value={email.value}
          onValueChanged={e => (email.value = e.detail.value)}
          required
        />
        <Button theme="primary" onClick={handleSubmit}>Submit</Button>
      </form>
    </section>
  );
}
