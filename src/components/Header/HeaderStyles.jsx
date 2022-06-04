import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';
import Scrollspy from 'react-scrollspy';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    padding-top: 2rem;
    position: sticky;
    z-index: 1;
    left: 0;
    top: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.background1};

    @media ${props => props.theme.breakpoints.sm} {
        flex-direction: column;
    }
`;
export const Div1 = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
`;
// Navigation Links
export const NavLink = styled.a`
    font-size: 2rem;
    line-height: 32px;
    color: rgba(255, 255, 255, 0.75);
    transition: 0.4s ease;
    &:hover {
        color: #fff;
        opacity: 1;
        cursor: pointer;
    }
    @media ${props => props.theme.breakpoints.sm} {
        padding: 0.5rem;
    }
`;
export const Div2 = styled(Scrollspy)`
    display: flex;
    justify-content: space-around;
    align-items: center;

    & li {
        margin: 0 1rem;

        @media ${props => props.theme.breakpoints.sm} {
            margin: 1rem 0;
        }

        &.active {
            ${NavLink} {
                color: #fff;
                background: linear-gradient(270deg, #f46737 0%, #945dd6 100%);
                border-radius: 0.5rem;
                opacity: 1;
                font-weight: bold;
                padding: 0.5rem 1rem;
            }
        }
    }

    @media ${props => props.theme.breakpoints.sm} {
        flex-direction: column;
        margin-top: 2rem;

        height: ${props => (props.expand ? '100%' : '0')};
        overflow: hidden;
    }
`;

export const MenuExpander = styled.div`
    display: none;
    width: 100%;
    padding: 1rem;
    cursor: pointer;
    margin-top: 1rem;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.background2};

    &:hover {
        background-color: ${({ theme }) => theme.colors.background1};
    }

    @media ${props => props.theme.breakpoints.sm} {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
    border: none;
    display: flex;
    position: relative;
    background: none;
    font-size: 1.7rem;

    line-height: 32px;
    color: rgba(255, 255, 255, 0.75);
    cursor: pointer;
    transition: 0.3s ease;

    &:focus {
        outline: none;
    }
    &:hover {
        color: #fff;
    }

    @media ${props => props.theme.breakpoints.sm} {
        padding: 0.4rem 0;
    }
    @media ${props => props.theme.breakpoints.md} {
        padding: 0;
    }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
    margin-left: 8px;
    display: flex;
    align-self: center;
    transition: 0.3s ease;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
    transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

    &:hover {
        opacity: 1;
    }

    @media ${props => props.theme.breakpoints.sm} {
        margin: 2px 0 0 2px;
        width: 15px;
    }
`;

// Social Icons

export const SocialIcons = styled.a`
    transition: 0.3s ease;
    color: white;
    border-radius: 50px;
    padding: 8px;
    &:hover {
        background-color: #212d45;
        transform: scale(1.2);
        cursor: pointer;
    }
`;
