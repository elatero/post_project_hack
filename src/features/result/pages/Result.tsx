import React, { useState } from 'react'
import { connector, PropsFromRedux } from './container'

import styles from './Result.module.scss'

const Result = (props: PropsFromRedux) => {
  const [showListsCheck, setShowListsCheck] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.sideBar}>
        <form action='#' method='POST' className={styles.formUpload} id='formUpload' encType='multipart/form-data'>
          <label className={styles.uploadLabel}>
            <span>Добавить новый файл</span>
            <input
              type='file'
              onChange={(e) => {
                const files = e.target.files

                if (files && files.length) {
                  const form = new FormData()
                  form.set('file', files[0])
                }
              }}
            />
          </label>
        </form>
        <div className={styles.blockHistory}>
          <div className={styles.wrapperCheckList}>
            <div className={styles.checkListCaption}>
              Предыдущие проверки
              <div className={styles.arrowToggle} onClick={() => setShowListsCheck(!showListsCheck)}>
                {showListsCheck ? (
                  <svg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M10.2857 7L6 2.625L1.71429 7L-1.19209e-07 6.125L6 0L12 6.125L10.2857 7Z' fill='#0055A6' />
                  </svg>
                ) : (
                  <svg width='12' height='7' viewBox='0 0 12 7' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M1.71429 0L6 4.375L10.2857 0L12 0.875L6 7L0 0.875L1.71429 0Z' fill='#0055A6' />
                  </svg>
                )}
              </div>
            </div>
            {showListsCheck ? (
              <ul className={styles.checkList}>
                <li className={styles.checkListItem}>Проверка от 13.11.20</li>
                <li className={styles.checkListItem}>Проверка от 11.11.20</li>
                <li className={styles.checkListItem}>Проверка от 03.11.20</li>
                <li className={styles.checkListItem}>Проверка от 28.10.20</li>
              </ul>
            ) : null}
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.panelDownload}>
          <p className={styles.fileName}>Обработка базы адресов tortiki_na_zakaz.xlsx от 14.11.20</p>
          <button className={styles.downloadBtn}>Скачать</button>
          <button className={styles.removeBtn}>Удалить</button>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.boxLeft}>
            <div className={styles.processBox}>
              <p className={styles.processTitle}>
                Обработано <span className={styles.blue}>1546</span> адресов. Из них
                <span className={styles.gray}> 15</span> некорректных
              </p>
              <div className={styles.processContent}>
                <div className={styles.processBoxDiagram}>
                  <div className={styles.processDiagram}>1546</div>
                  <div className={styles.processMarks}>
                    <div className={styles.processMark}>
                      <div className={styles.processMarkBlue}></div>1531
                    </div>
                    <div className={styles.processMark}>
                      <div className={styles.processMarkGray}></div>15
                    </div>
                  </div>
                </div>
                <ul className={styles.processTable}>
                  <li className={styles.processTableItem}>
                    <span>1531</span> корректный адрес
                  </li>
                  <li className={styles.processTableItem}>
                    <p className={styles.processTableItemGray}>
                      <span>15</span> некорректных адресов
                    </p>
                    <p className={styles.processTableItemLink}>Посмотреть</p>
                  </li>
                  <li className={styles.processTableItem}>
                    <p className={styles.processTableItemBlue}>
                      <span>112</span> дубликатов адресов
                    </p>
                    <p className={styles.processTableItemLink}>Посмотреть</p>
                  </li>
                </ul>
              </div>
            </div>
            <p className={styles.processInfo}>
              Можно бесплатно проверить ещё 114 адресов. <span>Посмотреть все тарифные планы?</span>
            </p>
          </div>
          <div className={styles.boxCenter}>
            <div className={styles.tableAddressCaption}>Статистика по адресам</div>
            <ul className={styles.tableAddress}>
              <li className={styles.tableAddressItem}>
                <span className={styles.tableAddressCount}>31078</span>
                <p className={styles.tableAddressText}>адресов обработано за последний месяц</p>
              </li>
              <li className={styles.tableAddressItem}>
                <span className={styles.tableAddressCount}>478065</span>
                <p className={styles.tableAddressText}>адресов обработано за последний год</p>
              </li>
              <li className={styles.tableAddressItem}>
                <span className={styles.tableAddressCount}>2065</span>
                <p className={styles.tableAddressText}>
                  адресов повторялись более 10 раз <span>Посмотреть</span>
                </p>
              </li>
              <li className={styles.tableAddressItem}>
                <span className={styles.tableAddressCount}>176</span>
                <p className={styles.tableAddressText}>
                  адресов обработано за последний месяц <span>Посмотреть</span>
                </p>
              </li>
            </ul>
            <p className={styles.downloadList}>Скачать подробный отчет</p>
          </div>
          <div className={styles.boxRight}>
            <div className={styles.card}>
              <p className={styles.cardRequest}>97</p>
              <p className={styles.cardText}>обращений за последний месяц</p>
            </div>
            <div className={styles.card}>
              <p className={styles.cardRequest}>1409</p>
              <p className={styles.cardText}>обращений за последний год</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connector(Result)
