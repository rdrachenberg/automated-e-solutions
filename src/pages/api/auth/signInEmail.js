import { createTransport } from "nodemailer";

export async function sendVerificationRequest(params) {
    const { identifier, url, provider, theme } = params;
    const { host } = new URL(url);

    const transport = createTransport(provider.server) ;
    const result = await transport.sendMail({
        to: identifier,
        from: provider.email,
        subject: `Signin to ${host}`,
        text: text({url, host}),
        html: html({url, host, theme}),
    });

    const failed = result.rejected.concat(result.pending).filter();
    if(failed.length) {
        throw new Error(`Emails (${failed.join(", ")}) could not be joined. Try again!`)
    }
}

function html(params) {
  const {url, host, theme} = params;

  const escapedHost = host.replace(/\./g, '&#8203;.');
  const brandColor = theme.brandColor || '#346df1';
  const color = {
    background: '#f9f9f9',
    text: '#444',
    mainBackground: '#fff',
    buttonBackground: brandColor,
    buttonBorder: brandColor,
    buttonText: theme.buttonText || '#fff',
  }
  return `
  <body style="background: ${color.background};">
  <table width="100%" border="0" cellspacing="20" cellpadding="0"
    style="background: ${color.mainBackground}; max-width: 600px; margin: auto; border-radius: 10px;">
    <tr>
      <td align="center"
        style="padding: 10px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
        Sign in to <strong>${escapedHost}</strong>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center" style="border-radius: 5px;" bgcolor="${color.buttonBackground}"><a href="${url}"
                target="_blank"
                style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${color.buttonText}; text-decoration: none; border-radius: 5px; padding: 10px 20px; border: 1px solid ${color.buttonBorder}; display: inline-block; font-weight: bold;">Sign
                in</a></td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center"
        style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${color.text};">
        If you did not request this email you can safely ignore it.
      </td>
    </tr>
  </table>
</body>
  `
}

function text(url, host){
  return `Sign into ${host},\n${url}\n\n`
}