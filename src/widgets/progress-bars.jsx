import React from 'react'
import _ from 'lodash'
import useHashQuery from '../hooks/useHashQuery'
import { getHashQuery } from '../utils'
import Card from '../components/card'
import { Flex, FlexItem } from '../components/flex'
import ProgressBar from '../components/progress-bar'
import styles from './progress-bars.module.css'

export default function ProgressBars() {
    let { title, attrs, progress, barColors, labels } = useHashQuery()
    attrs = (attrs || '').split(',')
    progress = (progress || '').split(',').map(v => parseFloat(v))
    barColors = (barColors || '').split(',')
    labels = (labels || '').split(',')
    const barConfigs = _.zip(attrs, progress, barColors, labels)
    return (
        <Card className={styles.card}>
            <h2>{title}</h2>
            {barConfigs.map(([attr, progress, color, label], idx) => (
                <Flex key={idx} className={styles.attrRow}>
                    <FlexItem grow={0} shrink={0} className={styles.attrName}>{attr}</FlexItem>
                    <ProgressBar animated progress={progress} color={color} className={styles.attrBar} />
                    <FlexItem grow={0} shrink={0} className={styles.attrDescr}>{label}</FlexItem>
                </Flex>
            ))}
        </Card>
    )
}
