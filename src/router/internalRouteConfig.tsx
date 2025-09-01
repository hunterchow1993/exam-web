// 导入Layout组件
import CommonLayout from '@/components/common/CommonLayout'
import CorretExamList from '@/views/internal/corret_exam_list'
import Exam from '@/views/internal/exam'
import ExamHistory from '@/views/internal/exam_history'
import ExamSelect from '@/views/internal/exam_select'
import PersonInfo from '@/views/internal/person_info'
import StudentManage from '@/views/internal/student_manage'
import CorretExam from '@/views/internal/corrent_exam'
import SubjectManage from '@/views/internal/subject_manage'
import SubjectAdd from '@/views/internal/subject_add'
import { RouteObject } from 'react-router-dom'
import BeforeEach from '../beforeEach'

const internalRouteConfig: RouteObject[] = [
  {
    element: <CommonLayout />,
    children: [
      {
        index: true,
        path: '/person_info',
        element: <BeforeEach><PersonInfo /></BeforeEach>
      },
      {
        path: '/exam_select',
        element: <ExamSelect />
      },
      {
        path: '/exam/:id',
        element: <Exam />
      },
      {
        path: '/exam_history',
        element: <ExamHistory />
      },
      {
        path: '/corret_exam_list',
        element: <CorretExamList />
      },
      {
        path: '/student_manage',
        element: <StudentManage />
      },
      {
        path: '/corret_exam/:id',
        element: <CorretExam />
      },
      {
        path: '/subject_manage',
        element: <SubjectManage />
      },
      {
        path: '/subject_add',
        element: <SubjectAdd />
      }
    ]
  }
]

export default internalRouteConfig