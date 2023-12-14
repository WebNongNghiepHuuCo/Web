import { message } from 'antd'

export function fallbackCopyTextToClipboard(text, t) {
  const textArea = document.createElement('textarea')
  textArea.value = text

  // Avoid scrolling to bottom
  textArea.style.top = '0'
  textArea.style.left = '0'
  textArea.style.position = 'fixed'

  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  try {
    const successful = document.execCommand('copy')
    if (successful) {
      message.destroy()
      message.success({
        content: t('file.messageCopiedSuccessfully'),
        duration: 2,
      })
    } else {
      message.error({
        content: t('file.messageCopiedFailed'),
        duration: 2,
      })
    }
  } catch (err) {
    message.error({
      content: t('file.messageCopiedFailed'),
      duration: 2,
    })
  }

  document.body.removeChild(textArea)
}
