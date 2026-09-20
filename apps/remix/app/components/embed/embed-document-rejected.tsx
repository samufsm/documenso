import { Trans } from '@lingui/react/macro';
import { XCircle } from 'lucide-react';

export const EmbedDocumentRejected = () => {
  return (
    <div className="embed--DocumentRejected relative mx-auto flex min-h-[100dvh] max-w-screen-lg flex-col items-center justify-center p-6">
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-x-4">
          <XCircle className="h-10 w-10 text-destructive" />

          <h2 className="max-w-[35ch] text-center font-semibold text-2xl leading-normal md:text-3xl lg:text-4xl">
            <Trans>Documento Recusado</Trans>
          </h2>
        </div>

        <div className="mt-4 flex items-center text-center text-destructive text-sm">
          <Trans>Você recusou este documento</Trans>
        </div>

        <p className="mt-6 max-w-[60ch] text-center text-muted-foreground text-sm">
          <Trans>
            O emissor do documento foi notificado de sua decisão.
          </Trans>
        </p>

        <p className="mt-2 max-w-[60ch] text-center text-muted-foreground text-sm">
          <Trans>Nenhuma ação adicional é necessária no momento.</Trans>
        </p>
      </div>
    </div>
  );
};
