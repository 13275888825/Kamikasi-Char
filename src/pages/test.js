import React, { useState } from 'react';
import { Input, Select, Slider, Radio, Row, Col, Button } from 'antd';

const { TextArea } = Input;
const { Option } = Select;
const RadioGroup = Radio.Group;

const App = () => {
  const [forwardPrompt, setForwardPrompt] = useState('');
  const [backwardPrompt, setBackwardPrompt] = useState('');
  const [iterationSteps, setIterationSteps] = useState(10);
  const [samplingMethod, setSamplingMethod] = useState('random');
  const [outputWidth, setOutputWidth] = useState(800);
  const [outputHeight, setOutputHeight] = useState(600);
  const [promptGuidance, setPromptGuidance] = useState(0.5);
  const [randomSeed, setRandomSeed] = useState(12345);

  const handleForwardPrompt = (e) => {
    if ((e.key === 'Enter' && e.ctrlKey) || (e.key === 'Enter' && e.altKey)) {
      // 处理正向提示词生成逻辑
    }
  };

  const handleBackwardPrompt = (e) => {
    if ((e.key === 'Enter' && e.ctrlKey) || (e.key === 'Enter' && e.altKey)) {
      // 处理反向提示词生成逻辑
    }
  };

  const handleGenerate = () => {
    // 处理生成逻辑
  };

  return (
    <div>
      <Row>
        <Col span={12}>
          <Select style={{ width: '100%' }} placeholder="选择模型">
            <Option value="stable_diffusion">Stable Diffusion</Option>
          </Select>
        </Col>
        <Col span={12}>
          <Select style={{ width: '100%' }} placeholder="选择VAE模型">
            {/* 添加你的VAE模型选项 */}
          </Select>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Slider
            min={0}
            max={1}
            step={0.01}
            value={promptGuidance}
            onChange={value => setPromptGuidance(value)}
          />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <TextArea
            placeholder="正向提示词（按Ctrl+Enter或Alt+Enter开始生成）"
            value={forwardPrompt}
            onChange={e => setForwardPrompt(e.target.value)}
            onKeyPress={handleForwardPrompt}
            autosize={{ minRows: 6 }}
          />
        </Col>
        <Col span={12}>
          {/* 右侧图片展示区域 */}
        </Col>
      </Row>
      {/* 第二行，类似第一行但有反向提示词 */}
      {/* 第三行，类似第二行但没有提示词 */}
      {/* 第四行，生成参数选择 */}
      <Row>
        <Col span={12}>
          <Slider
            min={1}
            max={100}
            value={iterationSteps}
            onChange={value => setIterationSteps(value)}
          />
          {/* 其他生成参数，包括采样方法、宽度、高度、随机数种子 */}
        </Col>
        <Col span={12}>
          <Button type="primary" onClick={handleGenerate}>
            生成
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default App;
