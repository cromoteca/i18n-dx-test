import { ViewConfig } from '@vaadin/hilla-file-router/types.js';
import { key, translate } from '@vaadin/hilla-react-i18n';
import { useSignal } from '@vaadin/hilla-react-signals';
import { Button, Notification, TextField } from '@vaadin/react-components';
import { HelloWorldService } from 'Frontend/generated/endpoints.js';

export const config: ViewConfig = {
  title: 'Hello from Hilla',
  menu: {
    title: 'Hilla',
    order: 1,
    icon: 'line-awesome/svg/globe-solid.svg'
  },
};

export default function HillaView() {
  const name = useSignal('');

  return (
    <>
      <section className="flex p-m gap-m items-end">
        <TextField
          label={translate(key`your.name`)}
          onValueChanged={(e) => {
            name.value = e.detail.value;
          }}
        />
        <Button
          onClick={async () => {
            const serverResponse = await HelloWorldService.sayHello(name.value);
            Notification.show(serverResponse);
          }}
        >
          {translate(key`say.hello`)}
        </Button>
      </section>
    </>
  );
}
