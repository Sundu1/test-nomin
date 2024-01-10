"""added sms_status to user m'odel

Revision ID: eeff0fd52306
Revises: 7dfed4e69d34
Create Date: 2023-12-18 17:51:22.115829

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'eeff0fd52306'
down_revision = '7dfed4e69d34'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('sms_status', sa.Boolean(), nullable=True))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'sms_status')
    # ### end Alembic commands ###