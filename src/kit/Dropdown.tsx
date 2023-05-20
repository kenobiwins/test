import { useIsOpen } from 'hooks/useIsOpen'
import { FC } from 'react'
import { styled } from 'styled-components'
import { CustomButton } from './Button'
import { filterValues, filterValuesType } from 'types/filter'

interface DropdownProps<T> {
  title: string
  options: T[]
  currentValue: filterValuesType
  submitOption: (value: filterValuesType) => void
}

export const Dropdown: FC<DropdownProps<string>> = ({
  options,
  currentValue,
  submitOption,
  title,
}) => {
  const { isOpen, close, toggle } = useIsOpen()

  const handleClick = (item: filterValuesType) => {
    submitOption(item)
    close()
  }

  return (
    <>
      {isOpen && <Backdrop onClick={close} />}
      <DropdownWrapper>
        <ContainerAnchor>
          <CustomButton title={title} onClick={toggle} />
          {isOpen && (
            <ContentWrapper>
              <OptionsWrapper>
                {options.map((item) => {
                  return (
                    <CustomButton
                      key={item}
                      isActive={currentValue === item}
                      title={item}
                      onClick={() => handleClick(item as filterValues)}
                    />
                  )
                })}
              </OptionsWrapper>
            </ContentWrapper>
          )}
        </ContainerAnchor>
      </DropdownWrapper>
    </>
  )
}

const Backdrop = styled.div({
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  zIndex: 900,
  backgroundColor: 'transparent',
})

const DropdownWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const ContainerAnchor = styled.div({
  position: 'relative',
})

const ContentWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.px.x1,
  fontWeight: 500,
  position: 'absolute',
  left: '50%',
  padding: theme.px.x2,
  borderRadius: '5px',
  zIndex: '999',
  transform: 'translate(-50%, 0)',
  transition: 'transform 250ms linear',
}))

const OptionsWrapper = styled.div(({ theme }) => ({
  display: 'grid',
  gap: theme.px.x4,
}))
