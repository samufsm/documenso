import { cn } from '@documenso/ui/lib/utils';

import { Trans } from '@lingui/react/macro';
import type { HTMLAttributes } from 'react';
import { Link } from 'react-router';

export type DocumentSigningDisclosureProps = HTMLAttributes<HTMLParagraphElement>;

export const DocumentSigningDisclosure = ({ className, ...props }: DocumentSigningDisclosureProps) => {
  return (
    <p className={cn('text-muted-foreground text-xs', className)} {...props}>
      <Trans>
        Ao prosseguir com sua assinatura eletrônica, você reconhece e concorda que ela será utilizada para assinar este documento, possuindo a mesma validade jurídica de uma assinatura manuscrita.
      </Trans>
    </p>
  );
};
