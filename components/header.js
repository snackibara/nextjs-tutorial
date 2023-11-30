import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
    return (
        <header>
<div className="logo"><Link href="/">Material Book</Link></div>

{/*menu start*/}
<div className="hamburger-menu">
{/* ボタンが押されたかどうかをチェックボックスで判断する */}
<input type="checkbox" id="menu-btn-check" />
{/*  ハンバーガーボタン */}
<label htmlFor="menu-btn-check" className="menu-btn"><span></span></label>
{/* menu inner*/}
<div className="menu-content">
<ul>
<li><Link href="list/index.html">List</Link></li>
<li><Link href="#">Article</Link></li>
<li><Link href="/about">About</Link></li>
</ul>
</div>
{/* menu inner end*/}
</div>
{/* menu end*/}

</header>
    )
}