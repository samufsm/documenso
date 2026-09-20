import { Trans } from '@lingui/react/macro';
import { useEffect, useState } from 'react';

export const EmbedRecipientExpired = () => {
  const [hasPostedMessage, setHasPostedMessage] = useState(false);

  useEffect(() => {
    if (window.parent && !hasPostedMessage) {
      window.parent.postMessage(
        {
          action: 'recipient-expired',
          data: null,
        },
        '*',
      );
    }

    setHasPostedMessage(true);
  }, [hasPostedMessage]);

  if (!hasPostedMessage) {
    return null;
  }

  return (
    <div className="embed--RecipientExpired relative mx-auto flex min-h-[100dvh] max-w-screen-lg flex-col items-center justify-center p-6">
      <h3 className="text-center font-bold text-2xl text-foreground">
        <Trans>Prazo de Assinatura Expirado</Trans>
      </h3>

      <div className="mt-8 max-w-[50ch] text-center">
        <p className="text-muted-foreground text-sm">
          <Trans>
            O prazo para assinatura deste documento expirou. Por favor, solicite um novo link ao remetente.
          </Trans>
        </p>

        <p className="mt-4 text-muted-foreground text-sm">
          <Trans>Consulte o sistema principal para mais informações.</Trans>
        </p>
      </div>
    </div>
  );
};
