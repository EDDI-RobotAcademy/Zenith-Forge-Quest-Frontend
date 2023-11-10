import CommonButton from '@/components/common/Button/Button'
import Chip from '@/components/common/Chip/Chip'
import Switch from '@/components/common/Switch/Switch'

function TestPage() {
  return (
    <div style={{ paddingTop: '24px' }}>
      <h1>Test Page</h1>
      <CommonButton>나와라</CommonButton>
      <CommonButton>나오긴하네</CommonButton>
      <CommonButton>나와라</CommonButton>
      <CommonButton>나와라</CommonButton>

      <CommonButton />

      <Chip className="asdasd" size="small" label="test" color="primary" href="test" />

      <Chip size="small" label="Chip Test" color="primary" />
      <Chip size="medium" label="Chip Test" color="primary" />
      <Chip size="medium" label="Chip Test" color="secondary" />
      <Chip size="medium" label="Chip Test" color="error" />
      <Chip size="medium" label="Chip Test" color="info" />
      <Chip size="medium" label="Chip Test" color="warning" />
      <Chip size="medium" label="Chip Test" color="info" />

      <Switch />
    </div>
  )
}

export default TestPage
